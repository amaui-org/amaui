import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceRetouchingNaturalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceRetouchingNaturalW100Filled'

      short_name='FaceRetouchingNatural'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3q.525 0 1 .05t.875.15l-2.25 1L17.1 6.925l1.325 3.025q-2.25.225-4.6-.638Q11.475 8.45 9.75 6.3 8.7 8.8 7.125 10.025T4 11.85q0 3.475 2.338 5.813Q8.675 20 12 20q3.4 0 5.7-2.4Q20 15.2 20 12q0-.275-.012-.5-.013-.225-.038-.35l.525-1.125q.125.45.175.963.05.512.05 1.012 0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm-3-6.45q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Zm6 0q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Zm4.5-6.85-.9-2-2-.9 2-.9.9-2 .9 2 2 .9-2 .9Z"/>
    </Icon>
  );
});

IconMaterialFaceRetouchingNaturalW100Filled.displayName = 'AmauiIconMaterialFaceRetouchingNaturalW100Filled';

export default IconMaterialFaceRetouchingNaturalW100Filled;
