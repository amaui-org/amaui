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
      <path d="M6 14q0 1.3.525 2.462.525 1.163 1.5 2.038Q8 18.375 8 18.275v-.225q0-.8.3-1.5t.875-1.275L12 12.5l2.825 2.775q.575.575.875 1.275.3.7.3 1.5v.225q0 .1-.025.225.975-.875 1.5-2.038Q18 15.3 18 14q0-1.25-.462-2.363-.463-1.112-1.338-1.987-.5.325-1.05.487-.55.163-1.125.163-1.55 0-2.687-1.025Q10.2 8.25 10.025 6.75 9.05 7.575 8.3 8.462q-.75.888-1.262 1.8-.513.913-.775 1.863Q6 13.075 6 14Zm6 1.3-1.425 1.4q-.275.275-.425.625-.15.35-.15.725 0 .8.588 1.375Q11.175 20 12 20t1.413-.575Q14 18.85 14 18.05q0-.4-.15-.738-.15-.337-.425-.612ZM12 3v3.3q0 .85.588 1.425.587.575 1.437.575.45 0 .838-.187.387-.188.687-.563L16 7q1.85 1.05 2.925 2.925Q20 11.8 20 14q0 3.35-2.325 5.675Q15.35 22 12 22q-3.35 0-5.675-2.325Q4 17.35 4 14q0-3.225 2.163-6.125Q8.325 4.975 12 3Z"/>
    </Icon>
  );
});

IconMaterialLocalFireDepartment.displayName = 'AmauiIconMaterialLocalFireDepartment';

export default IconMaterialLocalFireDepartment;
