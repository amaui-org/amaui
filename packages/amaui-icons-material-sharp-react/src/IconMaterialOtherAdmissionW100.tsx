import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOtherAdmissionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherAdmissionW100'

      short_name='OtherAdmission'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.35 18.8h1.3v-1.3h-1.3Zm2 0h1.3v-1.3h-1.3Zm2 0h1.3v-1.3h-1.3Zm-15.05.9V4.3h15.4v7.225q-.2-.05-.363-.075-.162-.025-.337-.075V5H5v14h6.35q.025.2.05.362.025.163.075.338ZM5 18v1V5v6.375V11.3 18Zm2.65-1.95h3.925q.05-.175.125-.338.075-.162.15-.362h-4.2Zm0-3.7h6.725q.4-.225.725-.388.325-.162.7-.287v-.025H7.65Zm0-3.7h8.7v-.7h-8.7ZM18 21.85q-1.55 0-2.625-1.075T14.3 18.15q0-1.55 1.075-2.625T18 14.45q1.55 0 2.625 1.075T21.7 18.15q0 1.55-1.075 2.625T18 21.85Z"/>
    </Icon>
  );
});

IconMaterialOtherAdmissionW100.displayName = 'AmauiIconMaterialOtherAdmissionW100';

export default IconMaterialOtherAdmissionW100;
