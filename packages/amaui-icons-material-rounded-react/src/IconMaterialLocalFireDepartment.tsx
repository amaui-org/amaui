import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalFireDepartment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalFireDepartment'

      short_name='LocalFireDepartment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-3.35 0-5.675-2.325Q4 17.35 4 14q0-2.825 1.675-5.425 1.675-2.6 4.6-4.55.55-.375 1.138-.038Q12 4.325 12 5v1.3q0 .85.588 1.425.587.575 1.437.575.425 0 .813-.187.387-.188.687-.538.2-.25.513-.313.312-.062.587.138Q18.2 8.525 19.1 10.275q.9 1.75.9 3.725 0 3.35-2.325 5.675Q15.35 22 12 22Zm-6-8q0 1.3.525 2.462.525 1.163 1.5 2.038Q8 18.375 8 18.275v-.225q0-.8.3-1.5t.875-1.275L12 12.5l2.825 2.775q.575.575.875 1.275.3.7.3 1.5v.225q0 .1-.025.225.975-.875 1.5-2.038Q18 15.3 18 14q0-1.25-.462-2.363-.463-1.112-1.338-1.987-.5.325-1.05.487-.55.163-1.125.163-1.55 0-2.687-1.025Q10.2 8.25 10.025 6.75q-1.95 1.65-2.987 3.512Q6 12.125 6 14Zm6 1.3-1.425 1.4q-.275.275-.425.625-.15.35-.15.725 0 .8.588 1.375Q11.175 20 12 20t1.413-.575Q14 18.85 14 18.05q0-.4-.15-.738-.15-.337-.425-.612Z"/>
    </Icon>
  );
});

IconMaterialLocalFireDepartment.displayName = 'AmauiIconMaterialLocalFireDepartment';

export default IconMaterialLocalFireDepartment;
