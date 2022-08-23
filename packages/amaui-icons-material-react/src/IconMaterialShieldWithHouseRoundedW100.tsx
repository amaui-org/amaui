import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHouseRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseRoundedW100'
      short_name='ShieldWithHouse'

      {...props}
    >
      <path d="m6.1 12.425 4.975-3.875q.425-.325.925-.325t.925.325l4.975 3.875q.05-.325.075-.65Q18 11.45 18 11.1V6.925q0-.25-.137-.45-.138-.2-.388-.3l-5.2-1.925Q12.15 4.2 12 4.2q-.15 0-.275.05l-5.2 1.925q-.25.1-.387.3-.138.2-.138.45V11.1q0 .35.025.675.025.325.075.65Zm4.55 6.9V16.4q0-.325.213-.537.212-.213.537-.213h1.2q.325 0 .538.213.212.212.212.537v2.925q1.65-.9 2.813-2.525 1.162-1.625 1.612-3.6L12.25 8.9q-.125-.1-.25-.1t-.25.1l-5.525 4.3q.45 1.975 1.613 3.6Q9 18.425 10.65 19.325Zm1.35 1.25h-.212q-.088 0-.163-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.25-1.8 5.838-1.8 2.587-4.525 3.587-.1.05-.375.05Zm0-8.525Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouseRoundedW100.displayName = 'AmauiIconMaterialShieldWithHouseRoundedW100';

export default IconMaterialShieldWithHouseRoundedW100;
