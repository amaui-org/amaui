import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoodBankFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoodBankFilled'

      short_name='FoodBank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.525-.4 1.2-.4.675 0 1.2.4l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21Zm4-7v3.5q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35V14q.625 0 1.062-.438.438-.437.438-1.062V10q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35v2.5H11V10q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15Q10 9.8 10 10v2.5h-.5V10q0-.2-.15-.35Q9.2 9.5 9 9.5q-.2 0-.35.15-.15.15-.15.35v2.5q0 .625.438 1.062Q9.375 14 10 14Zm4.5 4q.2 0 .35-.15.15-.15.15-.35v-7.4q0-.2-.15-.35-.15-.15-.35-.15-.7 0-1.1.575-.4.575-.4 1.325V14q0 .2.15.35.15.15.35.15h.5v3q0 .2.15.35.15.15.35.15Z"/>
    </Icon>
  );
});

IconMaterialFoodBankFilled.displayName = 'AmauiIconMaterialFoodBankFilled';

export default IconMaterialFoodBankFilled;
