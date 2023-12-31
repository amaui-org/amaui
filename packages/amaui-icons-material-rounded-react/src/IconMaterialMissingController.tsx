import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMissingController = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissingController'

      short_name='MissingController'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m226-774-56-56q59-62 138.5-96T480-960q92 0 171.5 34T790-830l-56 56q-48-50-113.5-78T480-880q-75 0-140.5 28T226-774Zm112 112-56-56q38-38 88.5-60T480-800q59 0 109.5 22t88.5 60l-56 56q-27-27-63.5-42.5T480-720q-42 0-78.5 15.5T338-662ZM480 0q-57 0-98.5-41.5T340-140v-322q0-57 41.5-98.5T480-602q57 0 98.5 41.5T620-462v322q0 57-41.5 98.5T480 0Zm0-380q33 0 56.5-23.5T560-460q0-33-23.5-56.5T480-540q-33 0-56.5 23.5T400-460q0 33 23.5 56.5T480-380Z"/>
    </Icon>
  );
});

IconMaterialMissingController.displayName = 'AmauiIconMaterialMissingController';

export default IconMaterialMissingController;
