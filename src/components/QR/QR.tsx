import qrCode from '../../assets/image-qr-code.png';
import './QR.scss';

function QR() {
	return (
		<div className="qr">
			<img src={qrCode} alt="qr code" className="qr__image" />
			<h1 className="qr__title">
				Improve your front-end skills by building projects
			</h1>
			<p className="qr__text">
				Scan the QR code to visit Frontend Mentor and take your coding
				skills to the next level
			</p>
		</div>
	);
}

export default QR;
