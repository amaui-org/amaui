import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWysiwygRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WysiwygRoundedW100Filled'
      short_name='Wysiwyg'

      {...props}
    >
      <path d="M5.8 19.7Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V5.8Q4.3 5.175 4.738 4.737Q5.175 4.3 5.8 4.3H18.2Q18.825 4.3 19.263 4.737Q19.7 5.175 19.7 5.8V18.2Q19.7 18.825 19.263 19.262Q18.825 19.7 18.2 19.7ZM5.8 19H18.2Q18.55 19 18.775 18.775Q19 18.55 19 18.2V7H5V18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19ZM7.35 11.35Q7.2 11.35 7.1 11.25Q7 11.15 7 11Q7 10.85 7.1 10.75Q7.2 10.65 7.35 10.65H16.65Q16.8 10.65 16.9 10.75Q17 10.85 17 11Q17 11.15 16.9 11.25Q16.8 11.35 16.65 11.35ZM7.35 15.35Q7.2 15.35 7.1 15.25Q7 15.15 7 15Q7 14.85 7.1 14.75Q7.2 14.65 7.35 14.65H12.65Q12.8 14.65 12.9 14.75Q13 14.85 13 15Q13 15.15 12.9 15.25Q12.8 15.35 12.65 15.35Z"/>
    </Icon>
  );
});

IconMaterialWysiwygRoundedW100Filled.displayName = 'AmauiIconMaterialWysiwygRoundedW100Filled';

export default IconMaterialWysiwygRoundedW100Filled;
