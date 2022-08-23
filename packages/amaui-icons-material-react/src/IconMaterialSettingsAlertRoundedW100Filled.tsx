import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsAlertRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAlertRoundedW100Filled'
      short_name='SettingsAlert'

      {...props}
    >
      <path d="M12 14.675q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM11.65 13h.7V8.65h-.7Zm-1.25 7.7-.35-2.8q-.525-.15-1.163-.5-.637-.35-1.062-.75l-2.575 1.1-1.6-2.8 2.225-1.675q-.05-.3-.088-.625-.037-.325-.037-.625 0-.275.037-.587l.088-.713L3.65 9.05l1.6-2.75L7.8 7.375q.5-.425 1.087-.763.588-.337 1.138-.512l.375-2.8h3.2l.35 2.825q.65.225 1.138.512.487.288 1.012.738L18.75 6.3l1.6 2.75-2.325 1.75q.1.35.113.638.012.287.012.562 0 .25-.025.537-.025.288-.1.713l2.275 1.7-1.6 2.8-2.6-1.125q-.525.45-1.05.762-.525.313-1.1.488L13.6 20.7Z"/>
    </Icon>
  );
});

IconMaterialSettingsAlertRoundedW100Filled.displayName = 'AmauiIconMaterialSettingsAlertRoundedW100Filled';

export default IconMaterialSettingsAlertRoundedW100Filled;
