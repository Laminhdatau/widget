$(document).ready(function() {
    // Create the WhatsApp widget container
    const whatsappWidget = $('<div>', { id: 'whatsapp-widget', class: 'devmin-whatsapp-widget' }).css({
        position: 'fixed',
        bottom: '20px',
        right: '20px'
    }).appendTo('body');

    // Create the WhatsApp button with logo
    const whatsappButton = $('<img>', {
        id: 'whatsapp-button',
        class: 'devmin-whatsapp-button',
        src: 'https://app.csai.id/file/pic.png', // Make sure to have this image in your project
        alt: 'WhatsApp Logo'
    }).css({
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        padding: '7px',
        borderRadius: '100px',
        backgroundColor: '#dbe4f2'
    }).hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    ).appendTo(whatsappWidget);

    // Create the profile card container
    const profileCard = $('<div>', { id: 'profile-card', class: 'devmin-profile-card' }).css({
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        width: '300px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'opacity 0.3s, visibility 0.3s',
        opacity: '0',
        visibility: 'hidden'
    }).appendTo('body');

    // Create the profile card header with profile image and title
    const profileCardHeader = $('<div>', { class: 'devmin-profile-card-header' }).css({
        backgroundColor: '#5880c0',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        position: 'relative'
    }).appendTo(profileCard);

    const headerProfileImg = $('<img>', {
        src: 'https://app.csai.id/file/pic.png',
        alt: 'Profile CS',
        class: 'devmin-profile-card-header-img'
    }).css({
        width: '40px',
        height: '40px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '3px solid #e9e9e9',
        position: 'absolute',
        padding: '1px',
        bottom: '50px',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)'
    }).appendTo(profileCardHeader);

    const headerTitle = $('<h3>', { class: 'devmin-profile-card-header-title' }).text('Chat Dengan Tim Kami Yuk').css({
        marginTop: '50px'
    }).appendTo(profileCardHeader);

    // Create the profile card body with customer service profiles
    const profileCardBody = $('<div>', { class: 'devmin-profile-card-body' }).css({
        padding: '10px 15px 15px'
    }).appendTo(profileCard);

    const profiles = [
        { name: 'Lamin', image: 'https://app.csai.id/file/pic.png', phone: '6281234567890', text: "Halo, customer service" },
        { name: 'Rian', image: 'https://app.csai.id/file/pic.png', phone: '6281234567891', text: "Halo, support" }
    ];

    $.each(profiles, function(index, profile) {
        const profileDiv = $('<div>', { class: 'devmin-profile' }).css({
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
        }).appendTo(profileCardBody);

        const profileImg = $('<img>', {
            src: profile.image,
            alt: profile.name,
            class: 'devmin-profile-img'
        }).css({
            border: '3px solid #e9e9e9',
            width: '50px',
            height: '45px',
            borderRadius: '50%',
            marginRight: '10px'
        }).appendTo(profileDiv);

        const profileInfo = $('<div>', { class: 'devmin-profile-info' }).css({
            flexGrow: '1'
        }).appendTo(profileDiv);

        const profileJenis = $('<div>', { class: 'devmin-profile-jenis' }).css({
            color: '#6f7072',
            fontSize: '17px'
        }).text("Customer Service").appendTo(profileInfo);

        const profileName = $('<div>', { class: 'devmin-profile-name' }).text(profile.name).appendTo(profileInfo);

        const profileStatus = $('<div>', { class: 'devmin-profile-status' }).css({
            display: 'flex',
            alignItems: 'center'
        }).appendTo(profileInfo);

        const statusBadge = $('<span>', { class: 'devmin-status-badge' }).css({
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#31b041',
            marginRight: '5px'
        }).appendTo(profileStatus);

        const statusText = $('<p>', { class: 'devmin-status-text' }).text('Online').css({
            margin: '0'
        }).appendTo(profileStatus);

        const whatsappLink = $('<a>', {
            href: `https://wa.me/${profile.phone}?text=${profile.text}`,
            target: '_blank',
            text: 'Hubungi Via WhatsApp',
            class: 'devmin-whatsapp-link'
        }).css({
            display: 'block',
            marginTop: '5px',
            color: '#25D366',
            textDecoration: 'none',
            fontWeight: 'bold'
        }).appendTo(profileInfo);
    });

    // Toggle profile card visibility on button click
    $('#whatsapp-button').on('click', function() {
        if (profileCard.css('visibility') === 'hidden') {
            profileCard.css({
                visibility: 'visible',
                opacity: '1'
            });
        } else {
            profileCard.css({
                visibility: 'hidden',
                opacity: '0'
            });
        }
    });
});
