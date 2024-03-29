import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutofpsSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutofpsSelect'

      short_name='AutofpsSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 9.2 1-2.9h.1l1 2.9ZM12 15q-2.5 0-4.25-1.75T6 9q0-2.5 1.75-4.25T12 3q2.5 0 4.25 1.75T18 9q0 2.5-1.75 4.25T12 15Zm-2.45-3q.175 0 .325-.113.15-.112.2-.262L10.6 10.2h2.8l.525 1.425q.05.15.2.262.15.113.325.113.325 0 .488-.213.162-.212.037-.512l-2.15-5.7q-.1-.25-.337-.413Q12.25 5 11.975 5t-.512.162q-.238.163-.338.413l-2.1 5.675q-.125.3.037.525.163.225.488.225ZM4 22q-.425 0-.712-.288Q3 21.425 3 21v-3q0-.425.288-.712Q3.575 17 4 17t.713.288Q5 17.575 5 18v3q0 .425-.287.712Q4.425 22 4 22Zm4 0q-.425 0-.713-.288Q7 21.425 7 21v-3q0-.425.287-.712Q7.575 17 8 17t.713.288Q9 17.575 9 18v3q0 .425-.287.712Q8.425 22 8 22Zm4 0q-.425 0-.712-.288Q11 21.425 11 21v-3q0-.425.288-.712Q11.575 17 12 17t.713.288Q13 17.575 13 18v3q0 .425-.287.712Q12.425 22 12 22Zm4 0q-.425 0-.712-.288Q15 21.425 15 21v-3q0-.425.288-.712Q15.575 17 16 17h4q.425 0 .712.288.288.287.288.712v3q0 .425-.288.712Q20.425 22 20 22Z"/>
    </Icon>
  );
});

IconMaterialAutofpsSelect.displayName = 'AmauiIconMaterialAutofpsSelect';

export default IconMaterialAutofpsSelect;
