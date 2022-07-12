import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradientSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientSharpW700Filled'
      short_name='Gradient'

      {...props}
    >
      <path d="M11.05 12.925H12.95V11H11.05ZM9.125 14.85H11.05V12.925H9.125ZM12.95 14.85H14.875V12.925H12.95ZM14.875 12.925H16.8V11H14.875ZM7.2 12.925H9.125V11H7.2ZM2.15 21.85V2.15H21.85V21.85ZM16.8 14.85H18.7V12.925H16.8ZM5.3 18.7H7.225V16.775H9.125V18.7H11.05V16.775H12.95V18.7H14.875V16.775H16.8V18.7H18.7V16.775H16.8V14.85H14.875V16.775H12.975V14.85H11.05V16.775H9.125V14.85H7.2V16.775H5.3ZM5.3 14.85H7.2V12.925H5.3Z"/>
    </Icon>
  )
});

export default IconMaterialGradientSharpW700Filled;
