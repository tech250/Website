import ContactUsHero from "../components/ContactUs/ContactUsHero";
import MapAndForm from "../components/ContactUs/MapAndForm";

const ContactUs = () => {
  return (
    <div className="layout-container pb-6">
      <ContactUsHero />
      <p className="custom-container text-black/50 text-center sm:text-lg">
        We’d love to hear from you! Whether you have a question about our
        products, need assistance, or just want to share your feedback, we're
        here to help. Reach out to us through any of the channels below, and
        we'll get back to you as soon as possible.
      </p>
      <MapAndForm />
    </div>
  );
};

export default ContactUs;
