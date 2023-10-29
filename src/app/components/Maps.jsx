import React from 'react'

const Maps = () => {
  return (
    <div className="w-full  ml-16 h-102 ">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14016.369959502083!2d77.21004709120764!3d28.566985256730874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sK-14%20South%20Extension%20I%2C%20Block%20K%20New%20Delhi%2C%20Delhi%20110049!5e0!3m2!1sen!2sin!4v1698478421721!5m2!1sen!2sinn"
        width="90%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Maps