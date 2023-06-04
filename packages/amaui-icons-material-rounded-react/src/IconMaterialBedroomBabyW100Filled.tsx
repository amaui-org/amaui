import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedroomBabyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomBabyW100Filled'

      short_name='BedroomBaby'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.6q1.725 0 3.313-.6 1.587-.6 2.862-1.65.125-.1.125-.25t-.125-.275q-.1-.1-.225-.1t-.25.1q-.2.2-.462.363-.263.162-.538.312l-1.15-2.05V11.1h.9q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-5.075q-.125 0-.212-.05-.088-.05-.138-.15l-1.5-2.6q-.05-.1-.138-.15-.087-.05-.212-.05H7.4q-.075 0-.088.037-.012.038.038.088.075.05.138.062.062.013.112.038t.063.075q.012.05-.038.1l-1.2 1.4q-.1.125-.1.25t.1.25q.1.1.238.125.137.025.262-.05L8.5 8.75v4.65l-1.2 2.1q-.35-.2-.587-.363-.238-.162-.438-.337-.1-.075-.225-.075t-.225.1q-.125.125-.112.262.012.138.137.263Q7.125 16.4 8.7 17q1.575.6 3.3.6Zm0-.7q-.95 0-1.975-.212Q9 16.475 7.9 15.9l1.2-2.15q1.575.6 2.9.6t2.9-.6l1.2 2.15q-1.1.55-2.125.775Q12.95 16.9 12 16.9Zm-7.2 3.8q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialBedroomBabyW100Filled.displayName = 'AmauiIconMaterialBedroomBabyW100Filled';

export default IconMaterialBedroomBabyW100Filled;
