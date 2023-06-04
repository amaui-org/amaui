import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialErrorMedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorMedW100Filled'

      short_name='ErrorMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.225 11.325 1.55 2.1q.125.15.3.15t.3-.15l1.55-2.1 1.525 2.1q.125.15.3.15t.3-.15l1.85-2.5q.1-.125.062-.25-.037-.125-.162-.225-.125-.075-.262-.063-.138.013-.213.138l-1.575 2.15-1.525-2.1q-.125-.15-.3-.15t-.3.15l-1.55 2.1-1.55-2.1q-.125-.15-.3-.15t-.3.15l-1.825 2.5q-.1.125-.063.262.038.138.163.213.125.075.263.063.137-.013.212-.138ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialErrorMedW100Filled.displayName = 'AmauiIconMaterialErrorMedW100Filled';

export default IconMaterialErrorMedW100Filled;
