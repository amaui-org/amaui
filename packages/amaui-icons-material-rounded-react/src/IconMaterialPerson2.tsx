import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPerson2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person2'

      short_name='Person2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.362Q10.525 4 12 4t2.575.938q1.1.937 1.3 2.362l.325 2.45q.125.9-.475 1.575-.6.675-1.5.675Zm0-2h4.45L13.9 7.6q-.1-.7-.637-1.15Q12.725 6 12 6q-.725 0-1.262.45-.538.45-.638 1.15ZM6 20q-.825 0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20Zm0-2h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q13.4 15 12 15t-2.775.337Q7.85 15.675 6.5 16.35q-.225.125-.362.35-.138.225-.138.5Zm6 0Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialPerson2.displayName = 'AmauiIconMaterialPerson2';

export default IconMaterialPerson2;
