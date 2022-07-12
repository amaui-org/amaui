import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHighlightOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightOutlinedW100'
      short_name='Highlight'

      {...props}
    >
      <path d="M6.65 8.15 4.9 6.4 5.4 5.9 7.15 7.65ZM11.65 6.15V3.65H12.35V6.15ZM17.35 8.15 16.85 7.65 18.6 5.9 19.1 6.4ZM10.3 20.7V16.45L7.3 13.45V10.3H16.7V13.45L13.7 16.45V20.7ZM11 20H13V16.15L16 13.15V11H8V13.15L11 16.15ZM12 15.5Z"/>
    </Icon>
  )
});

export default IconMaterialHighlightOutlinedW100;
