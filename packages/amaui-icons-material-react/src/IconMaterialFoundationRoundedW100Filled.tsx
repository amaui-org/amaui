import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFoundationRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoundationRoundedW100Filled'
      short_name='Foundation'

      {...props}
    >
      <path d="M6.65 18.7Q6.5 18.7 6.4 18.6Q6.3 18.5 6.3 18.35V15.7H5.75Q5.6 15.7 5.5 15.6Q5.4 15.5 5.4 15.35Q5.4 15.2 5.5 15.1Q5.6 15 5.75 15H6.3V10.95H6.175Q5.9 10.95 5.8 10.7Q5.7 10.45 5.9 10.25L11.5 5.2Q11.7 5 12 5Q12.3 5 12.5 5.2L18.1 10.25Q18.3 10.45 18.2 10.7Q18.1 10.95 17.825 10.95H17.7V15H18.25Q18.4 15 18.5 15.1Q18.6 15.2 18.6 15.35Q18.6 15.5 18.5 15.6Q18.4 15.7 18.25 15.7H17.7V18.35Q17.7 18.5 17.6 18.6Q17.5 18.7 17.35 18.7Q17.2 18.7 17.1 18.6Q17 18.5 17 18.35V15.7H12.35V18.35Q12.35 18.5 12.25 18.6Q12.15 18.7 12 18.7Q11.85 18.7 11.75 18.6Q11.65 18.5 11.65 18.35V15.7H7V18.35Q7 18.5 6.9 18.6Q6.8 18.7 6.65 18.7ZM7 15H11.65V6.025L7 10.225ZM12.35 15H17V10.225L12.35 6.025Z"/>
    </Icon>
  );
});

IconMaterialFoundationRoundedW100Filled.displayName = 'AmauiIconMaterialFoundationRoundedW100Filled';

export default IconMaterialFoundationRoundedW100Filled;
