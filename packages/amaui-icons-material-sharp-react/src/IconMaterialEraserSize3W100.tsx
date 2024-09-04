import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEraserSize3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EraserSize3W100'

      short_name='EraserSize3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M355.95-252q-43.06 0-73.51-30.2Q252-312.4 252-355.11q0-19.89 7.94-39.03T283-428l249-250q14.78-14.63 33.99-22.32Q585.2-708 605.15-708 648-708 678-677.8q30 30.2 30 72.91 0 19.89-7.68 39.03Q692.63-546.72 678-532L429-282q-16 15-34.5 22.5t-38.55 7.5Z"/>
    </Icon>
  );
});

IconMaterialEraserSize3W100.displayName = 'AmauiIconMaterialEraserSize3W100';

export default IconMaterialEraserSize3W100;
