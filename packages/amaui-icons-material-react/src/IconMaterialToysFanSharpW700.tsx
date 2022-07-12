import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToysFanSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysFanSharpW700'
      short_name='ToysFan'

      {...props}
    >
      <path d="M12 12q0-2.475 1.762-4.238Q15.525 6 18 6q2.475 0 4.238 1.762Q24 9.525 24 12Zm-6 6q-2.475 0-4.237-1.762Q0 14.475 0 12h12q0 2.475-1.762 4.238Q8.475 18 6 18Zm6-6q-2.475 0-4.237-1.762Q6 8.475 6 6q0-2.475 1.763-4.238Q9.525 0 12 0Zm0 12V12q2.475 0 4.238 1.762Q18 15.525 18 18q0 2.475-1.762 4.238Q14.475 24 12 24Z"/>
    </Icon>
  )
});

export default IconMaterialToysFanSharpW700;
