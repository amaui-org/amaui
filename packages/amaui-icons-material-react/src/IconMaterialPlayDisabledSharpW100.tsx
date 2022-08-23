import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayDisabledSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledSharpW100'
      short_name='PlayDisabled'

      {...props}
    >
      <path d="M14.9 13.05 14.4 12.55 15.3 12 11.35 9.5 9.3 7.45V7.35L16.6 12ZM17.05 19 12.6 14.55 9.3 16.65V11.25L4.95 6.9L5.45 6.4L17.55 18.5ZM10 12ZM10 15.35 12.05 14.05 10 12ZM11.35 9.5Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledSharpW100.displayName = 'AmauiIconMaterialPlayDisabledSharpW100';

export default IconMaterialPlayDisabledSharpW100;
