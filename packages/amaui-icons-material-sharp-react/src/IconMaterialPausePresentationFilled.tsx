import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPausePresentationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationFilled'

      short_name='PausePresentation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16h2V8H9Zm4 0h2V8h-2ZM2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialPausePresentationFilled.displayName = 'AmauiIconMaterialPausePresentationFilled';

export default IconMaterialPausePresentationFilled;
