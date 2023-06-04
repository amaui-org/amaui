import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalFireDepartmentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalFireDepartmentW100'

      short_name='LocalFireDepartment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14q0 1.85 1.038 3.375 1.037 1.525 2.762 2.2-.25-.35-.375-.738-.125-.387-.125-.787 0-.525.213-1 .212-.475.587-.85l1.9-1.875 1.925 1.875q.375.375.575.85.2.475.2 1 0 .4-.125.787-.125.388-.375.738 1.725-.675 2.762-2.2Q18 15.85 18 14q0-1.25-.462-2.363-.463-1.112-1.338-1.987-.5.325-1.05.487-.55.163-1.125.163-1.575 0-2.713-1.025Q10.175 8.25 10.025 6.7 9.05 7.5 8.3 8.387q-.75.888-1.262 1.825-.513.938-.775 1.888Q6 13.05 6 14Zm6 1.3-1.425 1.4q-.275.275-.425.625-.15.35-.15.725 0 .8.588 1.375Q11.175 20 12 20t1.413-.575Q14 18.85 14 18.05q0-.4-.15-.738-.15-.337-.425-.612Zm-1.3-9.975V6.3q0 1.4.963 2.35.962.95 2.362.95.475 0 .938-.15.462-.15.887-.425l.425-.275q1.15.95 1.787 2.337.638 1.388.638 2.913 0 2.8-1.95 4.75Q14.8 20.7 12 20.7t-4.75-1.95Q5.3 16.8 5.3 14q0-2.375 1.45-4.7t3.95-3.975Z"/>
    </Icon>
  );
});

IconMaterialLocalFireDepartmentW100.displayName = 'AmauiIconMaterialLocalFireDepartmentW100';

export default IconMaterialLocalFireDepartmentW100;
