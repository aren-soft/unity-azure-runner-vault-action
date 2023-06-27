(async () => {
    try {
        process.env['HTTP_PROXY'] = '10.100.18.4:3128';
        process.env['HTTPS_PROXY'] = '10.100.18.4:3128';
    } catch (error) {
        core.setFailed(error.message);
    }
})();
