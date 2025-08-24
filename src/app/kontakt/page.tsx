"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import content from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert(content.contact.form.successMessage);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
              {content.contact.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {content.contact.subtitle}
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-white">Rýchly kontakt</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Link
                    href={`tel:${content.personal.phone.replace(/\s/g, "")}`}
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Telefón</p>
                      <p className="text-sm text-white/60">{content.personal.phone}</p>
                    </div>
                  </Link>

                  <Link
                    href={`mailto:${content.personal.email}`}
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-sm text-white/60">{content.personal.email}</p>
                    </div>
                  </Link>

                  <div className="flex items-center space-x-4 text-white/80">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Lokalita</p>
                      <p className="text-sm text-white/60">{content.personal.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link href={content.personal.calendar} target="_blank" className="block">
                  <Button size="lg" className="w-full">
                    {content.contact.primaryCta}
                  </Button>
                </Link>
                <Link href={content.personal.calendar} target="_blank" className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    {content.contact.secondaryCta}
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-white">Sledujte ma</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Link
                      href={content.personal.social.instagram}
                      target="_blank"
                      className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Instagram size={20} />
                    </Link>
                    <Link
                      href={content.personal.social.linkedin}
                      target="_blank"
                      className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </Link>
                    <Link
                      href={content.personal.social.pretlak}
                      target="_blank"
                      className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-white">{content.faq.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    {content.faq.items.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-white text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/70">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-white">Napíšte mi</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        {content.contact.form.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Vaše meno"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        {content.contact.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="vas@email.sk"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                        {content.contact.form.company}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Názov firmy (voliteľné)"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                        {content.contact.form.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Opíšte svoj projekt alebo požiadavku..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      {content.contact.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
