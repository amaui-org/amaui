import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEarbudsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsSharpW100Filled'
      short_name='Earbuds'

      {...props}
    >
      <path d="M8 20.35Q6.2 20.35 4.925 19.075Q3.65 17.8 3.65 16V6Q3.65 5.025 4.375 4.337Q5.1 3.65 6.05 3.65H8.35V8.35H4.35V16Q4.35 17.525 5.413 18.587Q6.475 19.65 8 19.65Q9.525 19.65 10.588 18.587Q11.65 17.525 11.65 16V8Q11.65 6.2 12.925 4.925Q14.2 3.65 16 3.65Q17.8 3.65 19.075 4.925Q20.35 6.2 20.35 8V18Q20.35 18.975 19.65 19.663Q18.95 20.35 18 20.35H15.65V15.65H19.65V8Q19.65 6.475 18.588 5.412Q17.525 4.35 16 4.35Q14.475 4.35 13.413 5.412Q12.35 6.475 12.35 8V16Q12.35 17.8 11.075 19.075Q9.8 20.35 8 20.35Z"/>
    </Icon>
  );
});

IconMaterialEarbudsSharpW100Filled.displayName = 'AmauiIconMaterialEarbudsSharpW100Filled';

export default IconMaterialEarbudsSharpW100Filled;
