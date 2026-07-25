"""Verify Montauban/Occitanie purge on /api/realisations."""
import os, json, requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://pv-solutions-1.preview.emergentagent.com').rstrip('/')

def test_realisations_returns_12_no_montauban_occitanie():
    r = requests.get(f"{BASE_URL}/api/realisations", timeout=15)
    assert r.status_code == 200
    payload = r.json()
    items = payload.get('items', payload if isinstance(payload, list) else [])
    assert len(items) == 12, f"Expected 12 items, got {len(items)}"
    dumped = json.dumps(items, ensure_ascii=False)
    assert 'Montauban' not in dumped, "Montauban still present in realisations"
    assert 'Occitanie' not in dumped, "Occitanie still present in realisations"
    # No item has location Montauban / Occitanie
    for it in items:
        loc = (it.get('location') or '')
        assert loc != 'Montauban'
        assert loc != 'Occitanie'

def test_ferme_solaire_tarn_garonne_updated():
    r = requests.get(f"{BASE_URL}/api/realisations", timeout=15)
    items = r.json().get('items', [])
    target = [x for x in items if x.get('id') == 'ferme-solaire-tarn-garonne' or x.get('slug') == 'ferme-solaire-tarn-garonne']
    if target:
        assert target[0].get('location') == 'Tarn-et-Garonne'
