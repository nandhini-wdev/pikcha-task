import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import Select from 'react-select'
import Countries from '../countries.json'
import TaxOptions from './TaxOptions'
import { Link } from 'react-router-dom'

export default function AddressForm() {

    const [countryList, setCountryList] = React.useState([]),
        [residentialAddress, setResidentialAddress] = React.useState(''),
        [line2, setLine2] = React.useState(''),
        [city, setCity] = React.useState(''),
        [postCode, setPostCode] = React.useState(''),
        [state, setState] = React.useState(''),
        [country, setCountry] = React.useState(''),
        [isTaxNumAvaialable, setIsTaxNumAvaialable] = React.useState(false),
        [taxNumber, setTaxNumber] = React.useState(''),
        [taxOption, setTaxOption] = React.useState('')

    React.useEffect(() => {
        const data = Countries
        const options = []
        data.map((item, index) => {
            options.push({
                value: item.iso3,
                label: item.name,
                isFixed: true
            })
        })
        setCountryList(options)
    }, [])
    React.useEffect(() => {
        const params = {
            residentialAddress,
            line2,
            city,
            postCode,
            state,
            country,
            isTaxNumAvaialable,
            taxNumber,
            taxOption
        }
        console.log(params)
    }, [residentialAddress, line2, city, postCode, state, country, isTaxNumAvaialable, taxNumber, taxOption])

    return (
        <div className="container">
            <Row className='justify-content-center py-5 px-2 '>
                <Col lg='12'>
                    <Link to='/task' className='text-white'>Go to Task 1 & 2</Link>
                </Col>
                <Col lg='6' className='form-area rounded bg-white'>
                    <h3 className='text-center my-3'>Task 3: Address Form</h3>
                    <Form>
                        <FormGroup>
                            <Label for="residentialAddress">Residential Address</Label>
                            <Input type="text" name="residentialAddress" id="residentialAddress" placeholder="Enter address" onChange={(e) => setResidentialAddress(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="line2">Line 2 (Optional)</Label>
                            <Input type="text" name="line2" id="line2" placeholder="Continue address here.."
                                onChange={(e) => setLine2(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="city">City or Town</Label>
                            <Input type="text" name="city" id="city" placeholder="Enter city"
                                onChange={(e) => setCity(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="postcode">ZIP or post code</Label>
                            <Input type="text" name="postcode" id="postcode" placeholder="Enter postcode"
                                onChange={(e) => setPostCode(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="State">State or province</Label>
                            <Input type="text" name="State" id="State" placeholder="Enter state"
                                onChange={(e) => setState(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="State">Country</Label>
                            <Select
                                options={countryList}
                                onChange={(option) => setCountry(option.value)}
                                className='react-select'
                                classNamePrefix='select'
                            />
                        </FormGroup>
                        <TaxOptions country={country} isTaxNumAvaialable={isTaxNumAvaialable} taxAvailable={setIsTaxNumAvaialable} setTaxNumber={setTaxNumber} setTaxOption={setTaxOption} />
                    </Form>
                </Col>
            </Row>
        </div>
    )
}