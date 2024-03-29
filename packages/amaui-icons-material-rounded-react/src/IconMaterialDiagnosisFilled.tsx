import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiagnosisFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiagnosisFilled'

      short_name='Diagnosis'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 19h6q.425 0 .713-.288Q16 18.425 16 18t-.287-.712Q15.425 17 15 17H9q-.425 0-.712.288Q8 17.575 8 18t.288.712Q8.575 19 9 19Zm0-3h6q.425 0 .713-.288Q16 15.425 16 15t-.287-.713Q15.425 14 15 14H9q-.425 0-.712.287Q8 14.575 8 15t.288.712Q8.575 16 9 16Zm3-10.2q-.3-.375-.787-.587Q10.725 5 10.2 5q-.9 0-1.55.65T8 7.2q0 1.325 1.225 2.512 1.225 1.188 2.1 1.988.275.275.675.275t.675-.275q.875-.8 2.1-1.988Q16 8.525 16 7.2q0-.9-.65-1.55T13.8 5q-.525 0-1.012.213-.488.212-.788.587ZM18 22H6q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialDiagnosisFilled.displayName = 'AmauiIconMaterialDiagnosisFilled';

export default IconMaterialDiagnosisFilled;
