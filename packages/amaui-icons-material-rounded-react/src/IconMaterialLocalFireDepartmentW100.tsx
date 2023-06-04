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
      <path d="M12 20.7q-2.8 0-4.75-1.95Q5.3 16.8 5.3 14q0-2.075 1.125-4.137Q7.55 7.8 9.5 6.2q.375-.325.812-.125.438.2.438.65v.125q0 1.025 1 1.888 1 .862 2.275.862.475 0 .938-.15.462-.15.887-.425.2-.125.413-.113.212.013.387.163.975.95 1.513 2.237Q18.7 12.6 18.7 14q0 2.8-1.95 4.75Q14.8 20.7 12 20.7ZM6 14q0 1.85 1.038 3.375 1.037 1.525 2.762 2.2-.25-.35-.375-.738-.125-.387-.125-.787 0-.525.213-1 .212-.475.587-.85l1.9-1.875 1.925 1.875q.375.375.575.85.2.475.2 1 0 .4-.125.787-.125.388-.375.738 1.725-.675 2.762-2.2Q18 15.85 18 14q0-1.25-.462-2.363-.463-1.112-1.338-1.987-.5.325-1.05.487-.55.163-1.125.163-1.575 0-2.713-1.025Q10.175 8.25 10.025 6.7q-1.95 1.625-2.987 3.525Q6 12.125 6 14Zm6 1.3-1.425 1.4q-.275.275-.425.625-.15.35-.15.725 0 .8.588 1.375Q11.175 20 12 20t1.413-.575Q14 18.85 14 18.05q0-.4-.15-.738-.15-.337-.425-.612Z"/>
    </Icon>
  );
});

IconMaterialLocalFireDepartmentW100.displayName = 'AmauiIconMaterialLocalFireDepartmentW100';

export default IconMaterialLocalFireDepartmentW100;
