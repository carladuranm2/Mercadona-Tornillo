import { trigger, transition, style, query, animate, animateChild, group, state } from "@angular/animations";

export const fadeIn = trigger("fade", [
	transition("ex1 <=> ex2", [style({ opacity: 0 }), animate("400ms ease-out", style({ opacity: 1 }))])
]);
export const slideInAnimation = trigger("routeAnimations", [
  transition("right => left", [
		style({ position: "relative" }),
		query(":enter, :leave", [
			style({
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%"
			})
		]),
		query(":enter", [style({ left: "-100%" })]),
		query(":leave", animateChild()),
		group([
			query(":leave", [animate("400ms ease-out", style({ left: "100%" }))]),
			query(":enter", [animate("400ms ease-out", style({ left: "0%" }))])
		]),
		query(":enter", animateChild())
	]),
  transition("left => right", [
		style({ position: "relative" }),
		query(":enter, :leave", [
			style({
				position: "absolute",
				top: 0,
				right: 0,
				width: "100%"
			})
		]),
    query(":enter", [style({ right: "-100%" })]),
		query(":leave", animateChild()),
		group([
			query(":leave", [animate("400ms ease-out", style({ right: "100%" }))]),
			query(":enter", [animate("400ms ease-out", style({ right: "0%" }))])
		]),
		query(":enter", animateChild())
	]),
	transition("fadeIn => *", [style({ opacity: 0 }), animate("400ms ease-out", style({ opacity: 1 }))]),
	transition("* => fadeIn", [style({ opacity: 0 }), animate("400ms ease-out", style({ opacity: 1 }))]),

	///Default
	transition("* => *", [style({ opacity: 0 }), animate("400ms ease-out", style({ opacity: 1 }))])
]);
export const animationsListCampaigns = [
	trigger("tabChange", [
		state("open", style({ opacity: 1 })),
		state("closed", style({ opacity: 0 })),
		transition("open => closed", [animate("0.4s")]),
		transition("closed => open", [animate("0.4s")])
	]),
	trigger("loading", [
		state("open", style({ opacity: 1 })),
		state("closed", style({ opacity: 0 })),
		transition("open => closed", [animate("0.15s")]),
		transition("closed => open", [animate("0.15s")])
	]),
	trigger("HideChange", [
		state("open", style({ display: "flex" })),
		state("closed", style({ display: "none" })),
		transition("open => closed", [animate("0.9s")]),
		transition("closed => open", [animate("0.9s")])
	])
];
export const fadeInComponentFast = trigger("tabChange", [
	state("open", style({ opacity: 1 })),
	state("closed", style({ opacity: 0 })),
	transition("open => closed", [animate("0.2s")]),
	transition("closed => open", [animate("0.2s")])
]);
export const fadeInComponent = trigger("tabChange", [
	state("open", style({ opacity: 1 })),
	state("closed", style({ opacity: 0 })),
	transition("open => closed", [animate("0.4s")]),
	transition("closed => open", [animate("0.4s")])
]);
