import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrWeakSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrWeakSharpW100'
      short_name='HdrWeak'

      {...props}
    >
      <path d="M5.8 14.7Q4.675 14.7 3.888 13.912Q3.1 13.125 3.1 12Q3.1 10.875 3.888 10.087Q4.675 9.3 5.8 9.3Q6.925 9.3 7.713 10.087Q8.5 10.875 8.5 12Q8.5 13.125 7.713 13.912Q6.925 14.7 5.8 14.7ZM16.2 16.7Q14.25 16.7 12.875 15.325Q11.5 13.95 11.5 12Q11.5 10.05 12.875 8.675Q14.25 7.3 16.2 7.3Q18.15 7.3 19.525 8.675Q20.9 10.05 20.9 12Q20.9 13.95 19.525 15.325Q18.15 16.7 16.2 16.7ZM16.2 16Q17.85 16 19.025 14.825Q20.2 13.65 20.2 12Q20.2 10.35 19.025 9.175Q17.85 8 16.2 8Q14.55 8 13.375 9.175Q12.2 10.35 12.2 12Q12.2 13.65 13.375 14.825Q14.55 16 16.2 16Z"/>
    </Icon>
  );
});

IconMaterialHdrWeakSharpW100.displayName = 'AmauiIconMaterialHdrWeakSharpW100';

export default IconMaterialHdrWeakSharpW100;
