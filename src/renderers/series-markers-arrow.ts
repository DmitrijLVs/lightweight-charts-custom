import { ceiledOdd } from '../helpers/mathex';

import { Coordinate } from '../model/coordinate';

import { hitTestSquare } from './series-markers-square';
import { shapeSize } from './series-markers-utils';

export function drawArrow(
	up: boolean,
	ctx: CanvasRenderingContext2D,
	centerX: Coordinate,
	centerY: Coordinate,
	color: string,
	size: number,
	belowBar: boolean,
	text?: string
): void {
	const arrowSize = shapeSize('arrowUp', size);
	const halfArrowSize = (arrowSize - 1) / 2;
	const baseSize = ceiledOdd(size / 2);
	const halfBaseSize = (baseSize - 1) / 2;
	ctx.fillStyle = color;
	ctx.beginPath();
	if (up) {
		ctx.moveTo(centerX - halfArrowSize, centerY);
		ctx.lineTo(centerX, centerY - halfArrowSize);
		ctx.lineTo(centerX + halfArrowSize, centerY);
		ctx.lineTo(centerX + halfBaseSize, centerY);
		ctx.lineTo(centerX + halfBaseSize, centerY + halfArrowSize);
		ctx.lineTo(centerX - halfBaseSize, centerY + halfArrowSize);
		ctx.lineTo(centerX - halfBaseSize, centerY);
	} else {
		ctx.moveTo(centerX - halfArrowSize, centerY);
		ctx.lineTo(centerX, centerY + halfArrowSize);
		ctx.lineTo(centerX + halfArrowSize, centerY);
		ctx.lineTo(centerX + halfBaseSize, centerY);
		ctx.lineTo(centerX + halfBaseSize, centerY - halfArrowSize);
		ctx.lineTo(centerX - halfBaseSize, centerY - halfArrowSize);
		ctx.lineTo(centerX - halfBaseSize, centerY);
	}

	if (text) {
		const textWidth = ctx.measureText(text).width;
		const textHeight = parseInt(ctx.font, 10);
		const textLeft = centerX - (textWidth / 2);
		const textMargin = textHeight / 2;
		const textTop = centerY - arrowSize / 2 + (belowBar ? 1 : -1) * (arrowSize + textMargin);
		ctx.fillText(text, textLeft, textTop + textHeight);
	}

	ctx.fill();
}

export function hitTestArrow(
	up: boolean,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	x: Coordinate,
	y: Coordinate
): boolean {
	// TODO: implement arrow hit test
	return hitTestSquare(centerX, centerY, size, x, y);
}
