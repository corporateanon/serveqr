import serve = require('serve');
import ip = require('ip');
import getPort = require('get-port');
import qrCodeTerminal = require('qrcode-terminal');

export const startContentServer = async (dir: string): Promise<void> => {
    const ipAddress = ip.address();
    const port = await getPort();
    serve(dir, { port });
    qrCodeTerminal.generate(`http://${ipAddress}:${port}`);
};

const main = async () => {
    await startContentServer('.');
}

main();