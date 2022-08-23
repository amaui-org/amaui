import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImportContactsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportContactsSharpFilled'
      short_name='ImportContacts'

      {...props}
    >
      <path d="M13 17.05Q14.1 16.525 15.213 16.262Q16.325 16 17.5 16Q18.4 16 19.263 16.15Q20.125 16.3 21 16.6V6.7Q20.175 6.35 19.288 6.175Q18.4 6 17.5 6Q16.325 6 15.175 6.3Q14.025 6.6 13 7.2ZM12 20Q10.8 19.05 9.4 18.525Q8 18 6.5 18Q5.175 18 3.725 18.5Q2.275 19 1 20.05V5.55Q2.1 4.8 3.588 4.4Q5.075 4 6.5 4Q7.95 4 9.338 4.375Q10.725 4.75 12 5.5Q13.275 4.75 14.663 4.375Q16.05 4 17.5 4Q18.925 4 20.413 4.4Q21.9 4.8 23 5.55V20.05Q21.75 19 20.288 18.5Q18.825 18 17.5 18Q16 18 14.6 18.525Q13.2 19.05 12 20Z"/>
    </Icon>
  );
});

IconMaterialImportContactsSharpFilled.displayName = 'AmauiIconMaterialImportContactsSharpFilled';

export default IconMaterialImportContactsSharpFilled;
