const Security = () => {
  return (
    <>
      {/* Abstract Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-tertiary/10 blur-[100px] rounded-full -z-10"></div>

      <main className="relative pt-32 pb-40 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="max-w-3xl">
            <p className="font-label text-secondary uppercase tracking-[0.2em] text-sm mb-4">Integrity // Confidentiality // Availability</p>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-8 leading-tight">
              HARDENED <br />BY <span className="text-primary italic">DESIGN.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Security isn't a feature — it's the foundation. From enterprise network segmentation and SIEM deployments to offensive simulations and secure API development, every layer is built with a threat model in mind.
            </p>
          </div>
        </section>

        {/* Security Skills Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">

          {/* Large Card: Network Security */}
          <div className="md:col-span-2 glass-card rounded-xl p-8 flex flex-col justify-between group hover:border-primary/40 transition-all duration-300">
            <div className="mb-10">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
              <h3 className="font-headline text-3xl font-bold mb-4">Network Security</h3>
              <p className="text-on-surface-variant leading-relaxed max-w-md">
                Design and implementation of segmented enterprise networks with VLAN isolation, ACL policies, inter-VLAN firewalling, and perimeter WAF/load balancing using F5 BIG-IP and OPNsense.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 ghost-border rounded-full text-[10px] uppercase tracking-widest text-tertiary font-label">VLANs / ACLs</span>
              <span className="px-3 py-1 ghost-border rounded-full text-[10px] uppercase tracking-widest text-tertiary font-label">OPNsense</span>
              <span className="px-3 py-1 ghost-border rounded-full text-[10px] uppercase tracking-widest text-tertiary font-label">F5 BIG-IP (WAF/LTM)</span>
              <span className="px-3 py-1 ghost-border rounded-full text-[10px] uppercase tracking-widest text-tertiary font-label">Suricata IPS</span>
            </div>
          </div>

          {/* Small Card: SIEM & Monitoring */}
          <div className="glass-card rounded-xl p-8 hover:border-secondary/40 transition-all duration-300">
            <span className="material-symbols-outlined text-3xl text-primary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
            <h4 className="font-headline text-xl font-bold mb-2">SIEM &amp; Monitoring</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Security Onion, Kibana, Elasticsearch, Zeek, Wireshark, and Nmap for full-stack threat visibility and incident detection.
            </p>
          </div>

          {/* Small Card: Offensive Security */}
          <div className="glass-card rounded-xl p-8 hover:border-tertiary/40 transition-all duration-300">
            <span className="material-symbols-outlined text-3xl text-tertiary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>bug_report</span>
            <h4 className="font-headline text-xl font-bold mb-2">Offensive Security</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Kali Linux, Metasploit, penetration testing, social engineering simulations (ransomware, reverse shell, keylogger) validated through Suricata + Zeek + SIEM detections.
            </p>
          </div>

          {/* Medium Card: Secure Development */}
          <div className="md:col-span-2 glass-card rounded-xl p-8 flex flex-col md:flex-row items-start gap-8 hover:border-primary/40 transition-all duration-300">
            <div className="flex-1">
              <h4 className="font-headline text-2xl font-bold mb-2">Secure Development</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                JWT authentication, HTTPS/SSL certificate configuration, role-based access control (RBAC), REST API hardening, and OWASP Top 10 mitigation applied across fullstack projects.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 ghost-border rounded-full text-[10px] uppercase tracking-widest text-tertiary font-label">JWT</span>
                <span className="px-3 py-1 ghost-border rounded-full text-[10px] uppercase tracking-widest text-tertiary font-label">HTTPS/SSL</span>
                <span className="px-3 py-1 ghost-border rounded-full text-[10px] uppercase tracking-widest text-tertiary font-label">RBAC</span>
                <span className="px-3 py-1 ghost-border rounded-full text-[10px] uppercase tracking-widest text-tertiary font-label">OWASP Top 10</span>
              </div>
            </div>
            <div className="w-full md:w-48 h-24 rounded-lg bg-surface-container-highest relative overflow-hidden flex items-center justify-center border border-white/5 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
              <span className="material-symbols-outlined text-primary text-4xl">lock</span>
            </div>
          </div>

          {/* Small Card: Virtualization */}
          <div className="glass-card rounded-xl p-8 hover:border-secondary/40 transition-all duration-300 flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>dns</span>
            <h4 className="font-headline text-xl font-bold mb-2">Virtualization</h4>
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Proxmox · VM Deployment · Resource Allocation</p>
          </div>

        </section>

        {/* Contact Section */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold mb-4">Establish Connection</h2>
            <p className="text-on-surface-variant">Send a message for collaborations, security inquiries, or just to connect.</p>
          </div>
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -z-10"></div>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.elements.name.value;
                const message = e.target.elements.message.value;
                window.location.href = `mailto:isaac.hdz.perez24@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
              }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant ml-1">Name</label>
                  <input name="name" required className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:border-secondary transition-all outline-none text-on-surface placeholder:text-on-surface/20" placeholder="Your Name" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant ml-1">Email</label>
                  <input name="email" className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:border-secondary transition-all outline-none text-on-surface placeholder:text-on-surface/20" placeholder="your@email.com" type="email" />
                </div>
                <div className="pt-4 hidden md:block">
                  <div className="flex items-center gap-4 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-sm">mail</span>
                    <span>Reaches me at isaac.hdz.perez24@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2 h-full flex flex-col">
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant ml-1">Message</label>
                  <textarea name="message" required className="w-full flex-grow bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:border-secondary transition-all outline-none text-on-surface placeholder:text-on-surface/20 resize-none min-h-[160px]" placeholder="Tell me about your project or inquiry..."></textarea>
                </div>
              </div>
              <div className="md:col-span-2 mt-4">
                <button className="w-full py-5 bg-primary text-on-primary rounded-xl font-headline font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3" type="submit">
                  <span className="material-symbols-outlined">send</span>
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Security;
