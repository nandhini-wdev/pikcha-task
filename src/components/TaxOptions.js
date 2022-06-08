import React from "react"
import { FormGroup, Input, CustomInput } from 'reactstrap'

function TaxOptions(props) {
    const { country, isTaxNumAvaialable, taxAvailable, setTaxNumber, setTaxOption } = props
    const handleTaxChange = (e) => {
        const { checked } = e.target
        if (checked) setTaxOption('')
        else setTaxNumber('')
        taxAvailable(checked)
    }

    const handleTaxOption = (e) => {
        const { value } = e.target
        setTaxOption(value)
    }
    return (
        <>
            {country && country === 'AUS' &&
                <FormGroup>
                    <CustomInput type='checkbox' id='isTaxNumAvaialable' name='isTaxNumAvaialable' label='Do you have tax Number?' onChange={e => handleTaxChange(e)} />

                </FormGroup>
            }
            {country && country === 'AUS' && isTaxNumAvaialable &&
                <>
                    <div className='my-3'>
                        <div className='h4'><b>My Tax Number</b></div>
                        <hr />
                    </div>
                    <FormGroup>
                        <Input type="text" name="taxNumber" id="taxNumber" placeholder="Enter tax number"
                            onChange={(e) => setTaxNumber(e.target.value)} />
                    </FormGroup>
                </>
            }
            {country && country === 'AUS' && !isTaxNumAvaialable &&
                <>
                    <div className='my-3'>
                        <div className='h4'><b>Exemption Categories</b></div>
                        <hr />
                    </div>
                    <FormGroup>
                        <CustomInput type='radio' id='exampleCustomRadio' name='taxOption' label='Category 1' value='Category 1' onChange={e => handleTaxOption(e)} />
                        <CustomInput type='radio' id='exampleCustomRadio2' name='taxOption' label='Category 2' value='Category 2' onChange={e => handleTaxOption(e)} />
                        <CustomInput type='radio' id='exampleCustomRadio3' name='taxOption' label='Category 3' value='Category 3' onChange={e => handleTaxOption(e)} />
                        <CustomInput type='radio' id='exampleCustomRadio4' name='taxOption' label='Category 4' value='Category 4' onChange={e => handleTaxOption(e)} />
                    </FormGroup>
                </>
            }
        </>
    )
}

export default TaxOptions