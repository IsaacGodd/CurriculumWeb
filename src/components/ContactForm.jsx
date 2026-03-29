import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus('success');
          formRef.current.reset();
        },
        (error) => {
          console.error('Error al enviar:', error.text);
          setStatus('error');
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-3">
      <div>
        <label className="block text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1 font-semibold">{t('contact.name')}</label>
        <input
          type="text"
          name="from_name"
          required
          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 transition-colors"
          placeholder={t('contact.namePlaceholder')}
        />
      </div>

      <div>
        <label className="block text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1 font-semibold">{t('contact.email')}</label>
        <input
          type="email"
          name="reply_to"
          required
          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 transition-colors"
          placeholder={t('contact.emailPlaceholder')}
        />
      </div>

      <div>
        <label className="block text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1 font-semibold">{t('contact.message')}</label>
        <textarea
          name="message"
          required
          rows="3"
          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
          placeholder={t('contact.messagePlaceholder')}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-1 px-5 py-2.5 bg-primary text-on-primary font-bold text-sm rounded-lg hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
      >
        {status === 'sending' ? t('contact.sending') : t('contact.send')}
      </button>

      {status === 'success' && (
        <p className="text-xs text-center text-green-400">{t('contact.success')}</p>
      )}
      {status === 'error' && (
        <p className="text-xs text-center text-red-400">{t('contact.error')}</p>
      )}
    </form>
  );
};

export default ContactForm;
