import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceRetouchingOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceRetouchingOffW100Filled'

      short_name='FaceRetouchingOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.75 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.05 13.8 3.05 12q0-1.875.713-3.45.712-1.575 1.837-2.7l-2.8-2.8q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l17.9 17.9q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125l-2.8-2.8q-1.2 1.175-2.712 1.862-1.513.688-3.438.688Zm7.75-4.75-.5-.55q.35-.8.55-1.65.2-.85.2-1.75 0-.6-.075-1.163-.075-.562-.275-1.087-.525.125-1.05.188-.525.062-1.1.062-1.4 0-2.612-.338-1.213-.337-2.388-1.012l-4.4-4.4q.975-.5 1.85-.725.875-.225 2.05-.225 1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.45 10.2 20.45 12q0 .95-.212 1.962-.213 1.013-.738 1.988Zm-10.75-1.7q-.525 0-.888-.363Q7.5 13.525 7.5 13t.362-.887q.363-.363.888-.363t.887.363Q10 12.475 10 13t-.363.887q-.362.363-.887.363Zm3 5.75q1.7 0 3.188-.663 1.487-.662 2.462-1.687L8.25 8.5q-.8 1.125-2.05 2.037-1.25.913-2.45 1.313V12q0 3.325 2.338 5.663Q8.425 20 11.75 20Z"/>
    </Icon>
  );
});

IconMaterialFaceRetouchingOffW100Filled.displayName = 'AmauiIconMaterialFaceRetouchingOffW100Filled';

export default IconMaterialFaceRetouchingOffW100Filled;
