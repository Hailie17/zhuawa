export class DateFormat {
	public static toTwoDigit(value: number):string {
		return value < 10 ? `0${value}` : `${value}`
	}
	public static format(time: Date | number, formation: string) {
		return new DateFormat(time).format(formation)
	}
	private date: Date;
	constructor(time: Date | number) {
		if(typeof time === 'number') {
			this.date = new Date(time)
		} else {
			this.date = time
		}
	}
	/**
	 * @param formation YYYY-MM-DD => 2020-11-12   YYYY.MM.DD => 2020.11.12
	 */
	public format(formation: string) {
		return formation.replace(/Y+|M+|D+|H+|h+|m+|s+/g, ($0: string) => {
			const result = this[$0]
			return result === undefined ? $0 : result
		})
	}
	get YYYY() {
		return this.date.getFullYear()
	}
	get M() {
		return this.date.getMonth() + 1
	}
	get MM() {
		return DateFormat.toTwoDigit(this.M)
	}
	get D() {
		return this.date.getDate()
	}
	get DD() {
		return DateFormat.toTwoDigit(this.D)
	}
	get H() {
		return this.date.getHours()
	}
	get HH() {
		return DateFormat.toTwoDigit(this.H)
	}
	get h() {
		const h = this.H
		return h > 12 ? h-12 : h
	}
	get hh() {
		return DateFormat.toTwoDigit(this.h)
	}
	get m () {
		return this.date.getMinutes()
	}
	get mm() {
		return DateFormat.toTwoDigit(this.m)
	}
	get s() {
		return this.date.getSeconds()
	}
	get ss() {
		return DateFormat.toTwoDigit(this.s)
	}
}