import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroceryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroceryW100'

      short_name='Grocery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-132q-78 0-133-55t-55-133q0-78 55-133t133-55q78 0 133 55t55 133q0 78-55 133t-133 55Zm0-28q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm-448-52q-26 0-43-17t-17-43v-266q0-8 3.5-19t6.5-19l92-204h-40q-12 0-18-6t-6-18q0-12 6-18t18-6h212q12 0 18 6t6 18q0 12-6 18t-18 6h-40l110 248q-5 3-10.5 8T454-513L336-780h-72L160-547v275q0 14 9 23t23 9h192q2 8 5 15t6 13H192Zm448-356q-21-9-34.5-27.5T592-638q0-24 13.5-42.5T640-708v140q9-21 27.5-34.5T710-616q24 0 42.5 13.5T780-568H640Z"/>
    </Icon>
  );
});

IconMaterialGroceryW100.displayName = 'AmauiIconMaterialGroceryW100';

export default IconMaterialGroceryW100;
