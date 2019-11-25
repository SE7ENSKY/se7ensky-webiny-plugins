import React, { Component } from "react";
import SlickSlider from "react-slick";
import css from "@emotion/css";
import Element from "@webiny/app-page-builder/render/components/Element";
import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
import ElementAnimation from "@webiny/app-page-builder/render/components/ElementAnimation";

class Slider extends Component {
	formatNumber = (num) => {
		let str = '' + num;
		while (str.length < 3) {
			str = '0' + str;
		}

		return str;
	};

	render() {
		const {
			element,
			element: {
				data: {
					options = {},
					classname,
					progress = false,
				}
			}
		} = this.props;

		const customPaging = options.dots ? ({
			customPaging: i => (
				<div>
					{this.formatNumber(i + 1)}
				</div>
			)
		}) : {};

		const settings = {
			autoplay: false,
			arrows: false,
			dots: false,
			fade: false,
			infinite: false,
			lazyLoad: false,
			...options,
			...customPaging,
			autoplaySpeed: options.autoplaySpeed ? parseInt(options.autoplaySpeed) : 3000,
			slidesToScroll: options.slidesToScroll ? parseInt(options.slidesToScroll) : 1,
			slidesToShow: options.slidesToShow ? parseInt(options.slidesToShow) : 1,
		};

		return (
			<ElementAnimation>
				<ElementRoot element={element}>
					{({ elementStyle, elementAttributes, customClasses, combineClassNames }) => {
						const { width, alignItems, justifyContent, ...containerStyle } = elementStyle;

						return (
							<div
								style={{ width: "100%", display: "flex", justifyContent: "center" }}
								className={"webiny-pb-layout-block-container " + css(containerStyle)}
								{...elementAttributes}
							>
								<div
									style={{
										width: width ? width : "100%",
										alignSelf: justifyContent,
										alignItems: alignItems
									}}
									className={combineClassNames(
										"webiny-pb-layout-block webiny-pb-base-element-style",
										...customClasses
									)}
								>
									<div className={combineClassNames(
										"slider-wrapper",
										classname
									)}>
										<SlickSlider {...settings}>
											{element.elements.map(element => (
												<Element key={element.id} element={element} />
											))}
										</SlickSlider>
										{settings.dots && (
											<div className="slider-wrapper__total-pages">
												/ {this.formatNumber(element.elements.length)}
											</div>
										)}
										{progress && settings.autoplay && (
											<div style={{ animationDuration: `${settings.autoplaySpeed / 1000}s` }}/>
										)}
									</div>
								</div>
							</div>
						);
					}}
				</ElementRoot>
			</ElementAnimation>
		);
	}
}

export default Slider;
