// @flow

export default [
	{
		name: "pb-page-settings-fields-additional",
		type: "pb-page-settings-fields",
		fields: `
      additional {
        image {
          src
        }
        date
        order
        description
        video {
          src
        }
        fields {
          property
          content
        }
      }
    `
	}
];
