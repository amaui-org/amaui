import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutofpsSelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutofpsSelectW100'

      short_name='AutofpsSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 9.35 1-2.7H12l1.05 2.7ZM12 13.7q-1.95 0-3.325-1.375Q7.3 10.95 7.3 9q0-1.95 1.375-3.325Q10.05 4.3 12 4.3q1.95 0 3.325 1.375Q16.7 7.05 16.7 9q0 1.95-1.375 3.325Q13.95 13.7 12 13.7Zm-2.65-2.05h.7L10.7 10h2.6l.65 1.65h.8l-2.55-6.3h-.45Zm-5.25 9.7v-3.7h.7v3.7Zm3.2 0v-3.7H8v3.7Zm3.2 0v-3.7h.7v3.7Zm3.2 0v-3.7h6.2v3.7Z"/>
    </Icon>
  );
});

IconMaterialAutofpsSelectW100.displayName = 'AmauiIconMaterialAutofpsSelectW100';

export default IconMaterialAutofpsSelectW100;
