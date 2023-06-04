import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorTextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorTextW100Filled'

      short_name='FormatColorText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.7 21q-.275 0-.487-.2Q2 20.6 2 20.3q0-.275.213-.488.212-.212.487-.212h18.6q.275 0 .488.2.212.2.212.5 0 .275-.212.488-.213.212-.488.212Zm4.25-5.05q-.175 0-.275-.125-.1-.125-.025-.325l5-12.025q.05-.1.138-.163.087-.062.212-.062.1 0 .2.062.1.063.15.163l4.975 11.95q.1.2-.025.362-.125.163-.325.163-.125 0-.225-.063-.1-.062-.15-.187l-1.4-3.4H8.7l-1.4 3.425q-.05.1-.138.162-.087.063-.212.063Zm2-4.3h6l-2.9-7.1h-.15Z"/>
    </Icon>
  );
});

IconMaterialFormatColorTextW100Filled.displayName = 'AmauiIconMaterialFormatColorTextW100Filled';

export default IconMaterialFormatColorTextW100Filled;
