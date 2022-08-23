import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttachEmailSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachEmailSharpW100'
      short_name='AttachEmail'

      {...props}
    >
      <path d="M2.125 16.7V3.3H19.525V9.5H18.825V4.55L10.825 9.85L2.825 4.55V16H13.775V16.7ZM10.825 9 18.425 4H3.225ZM18.825 20.65Q17.55 20.65 16.663 19.762Q15.775 18.875 15.775 17.6V13.1Q15.775 12.375 16.262 11.887Q16.75 11.4 17.475 11.4Q18.2 11.4 18.688 11.887Q19.175 12.375 19.175 13.1V17.6H18.475V13.1Q18.475 12.675 18.188 12.387Q17.9 12.1 17.475 12.1Q17.05 12.1 16.763 12.387Q16.475 12.675 16.475 13.1V17.6Q16.475 18.575 17.163 19.262Q17.85 19.95 18.825 19.95Q19.8 19.95 20.488 19.262Q21.175 18.575 21.175 17.6V13.6H21.875V17.6Q21.875 18.875 20.988 19.762Q20.1 20.65 18.825 20.65ZM2.825 4V16V13.1Q2.825 12 2.825 11.25Q2.825 10.5 2.825 10.5Z"/>
    </Icon>
  );
});

IconMaterialAttachEmailSharpW100.displayName = 'AmauiIconMaterialAttachEmailSharpW100';

export default IconMaterialAttachEmailSharpW100;
