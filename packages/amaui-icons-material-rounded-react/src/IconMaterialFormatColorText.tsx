import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorText'

      short_name='FormatColorText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.825 0-1.412-.587Q2 19.825 2 19q0-.825.588-1.413Q3.175 17 4 17h16q.825 0 1.413.587Q22 18.175 22 19q0 .825-.587 1.413Q20.825 21 20 21Zm3.15-7q-.675 0-1-.45-.325-.45-.075-1.1l4.25-11.3q.2-.475.687-.813Q11.5 0 12.025 0q.5 0 .975.337.475.338.675.813l4.25 11.3q.25.65-.075 1.1-.325.45-1.025.45-.3 0-.587-.2-.288-.2-.388-.475l-1-2.925H9.2l-1.05 2.925q-.1.275-.387.475-.288.2-.613.2ZM9.9 8.4h4.2l-2.05-5.8h-.1Z"/>
    </Icon>
  );
});

IconMaterialFormatColorText.displayName = 'AmauiIconMaterialFormatColorText';

export default IconMaterialFormatColorText;
