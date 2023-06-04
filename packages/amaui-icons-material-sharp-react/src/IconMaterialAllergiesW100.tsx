import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllergiesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllergiesW100'

      short_name='Allergies'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.425 17.35h.7v-6.425l-1.75-3.5-.625.325 1.675 3.325Zm2.45 0h.7v-6.275L15.25 7.75l-.625-.325-1.75 3.5Zm2.85-5.075L17.15 9.45l-.625-.325-1.425 2.85ZM8.25 12.25l.625-.325L7.45 9.1l-.625.3ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialAllergiesW100.displayName = 'AmauiIconMaterialAllergiesW100';

export default IconMaterialAllergiesW100;
