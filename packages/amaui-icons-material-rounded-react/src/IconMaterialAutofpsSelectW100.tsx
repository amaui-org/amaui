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
      <path d="m10.95 9.35 1-2.7H12l1.05 2.7ZM12 13.7q-1.95 0-3.325-1.375Q7.3 10.95 7.3 9q0-1.95 1.375-3.325Q10.05 4.3 12 4.3q1.95 0 3.325 1.375Q16.7 7.05 16.7 9q0 1.95-1.375 3.325Q13.95 13.7 12 13.7Zm-2.175-2.05q.1 0 .175-.063.075-.062.125-.137L10.7 10h2.6l.55 1.425q.05.1.138.162.087.063.212.063.225 0 .325-.15t.025-.35l-2.025-5q-.05-.15-.213-.263-.162-.112-.337-.112-.175 0-.325.112-.15.113-.2.263L9.525 11.2q-.075.2.013.325.087.125.287.125Zm-5.375 9.7q-.15 0-.25-.1T4.1 21v-3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3q0 .15-.1.25t-.25.1Zm3.2 0q-.15 0-.25-.1T7.3 21v-3q0-.15.1-.25t.25-.1q.15 0 .25.1T8 18v3q0 .15-.1.25t-.25.1Zm3.2 0q-.15 0-.25-.1t-.1-.25v-3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3q0 .15-.1.25t-.25.1Zm3.6 0q-.325 0-.537-.212-.213-.213-.213-.538v-2.2q0-.325.213-.538.212-.212.537-.212h4.7q.325 0 .538.212.212.213.212.538v2.2q0 .325-.212.538-.213.212-.538.212Z"/>
    </Icon>
  );
});

IconMaterialAutofpsSelectW100.displayName = 'AmauiIconMaterialAutofpsSelectW100';

export default IconMaterialAutofpsSelectW100;
