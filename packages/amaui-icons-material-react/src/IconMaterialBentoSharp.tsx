import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBentoSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoSharp'
      short_name='Bento'

      {...props}
    >
      <path d="M2 19V5H22V19ZM14 11H20V7H14ZM4 17H12V7H4ZM8 13.5Q7.375 13.5 6.938 13.062Q6.5 12.625 6.5 12Q6.5 11.375 6.938 10.938Q7.375 10.5 8 10.5Q8.625 10.5 9.062 10.938Q9.5 11.375 9.5 12Q9.5 12.625 9.062 13.062Q8.625 13.5 8 13.5ZM14 17H20V13H14Z"/>
    </Icon>
  );
});

IconMaterialBentoSharp.displayName = 'AmauiIconMaterialBentoSharp';

export default IconMaterialBentoSharp;
