import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftFilled'

      short_name='Draft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h10l6 6v14Zm9-13h5l-5-5Z"/>
    </Icon>
  );
});

IconMaterialDraftFilled.displayName = 'AmauiIconMaterialDraftFilled';

export default IconMaterialDraftFilled;
