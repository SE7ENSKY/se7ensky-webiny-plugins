// @flow

export default [
	{
		name: "pb-page-settings-fields-connections",
		type: "pb-page-settings-fields",
		fields: `
      connections {
        pages {
          id
          parent
          published
          title
          url
        }
      }
    `,
	}
];
