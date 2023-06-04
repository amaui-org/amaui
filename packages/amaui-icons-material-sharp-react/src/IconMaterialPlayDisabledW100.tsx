import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledW100'

      short_name='PlayDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.9 13.05-.5-.5.9-.55-3.95-2.5L9.3 7.45v-.1L16.6 12ZM17.05 19l-4.45-4.45-3.3 2.1v-5.4L4.95 6.9l.5-.5 12.1 12.1ZM10 12Zm0 3.35 2.05-1.3L10 12Zm1.35-5.85Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledW100.displayName = 'AmauiIconMaterialPlayDisabledW100';

export default IconMaterialPlayDisabledW100;
